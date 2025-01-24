import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./api/postsApi";
import "./App.css";
import PrimarySearchAppBar from "./components/AppBar";
import ActionAreaCard from "./components/Card";
import { setCurrentPage } from "./redux/blog/blogSlice";
import { RootState } from "./redux/store";
import { IPost } from "./type";
import { Box } from "@mui/material";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const query = useSelector((state: RootState) => state.blog.query)
  const currentPage = useSelector((state: RootState) => state.blog.currentPage)
  const itemsPerPage = useSelector((state: RootState) => state.blog.itemsPerPage)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getPosts(query);
        setPosts(data);
      } catch (err) {
        console.log(err);
        setError("Не удалось загрузить данные");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [query]);

  if (error) return <div>Ошибка: {error}</div>;

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <PrimarySearchAppBar />
      <Box sx={{ maxWidth: "1300px", margin: "auto", padding: "20px" }}>
        <Grid
          container
          gap={2}
          justifyContent={"space-evenly"}
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 1, sm: 10, md: 13, lg: 16 }}
        >
          {loading ? 'Loading...' : currentPosts.map((post) => (
            <Grid key={post.id} size={{ xs: 1, sm: 3, md: 3 }}>
              <ActionAreaCard {...post} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          sx={{ float: 'right', my: 5 }}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </>
  );
}

export default App;
