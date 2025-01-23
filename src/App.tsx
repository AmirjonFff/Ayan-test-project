import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './app/store'
import { useEffect, useState } from 'react'
import { fetchPosts } from './api/postsApi';
import ActionAreaCard from './components/Card';
import { IPost } from './type';
import Grid from '@mui/material/Grid2';



function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Не удалось загрузить данные");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  console.log(posts);

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {posts.map(post =>
        <Grid key={post.id} size={{ xs: 2, sm: 4, md: 4 }}>
          <ActionAreaCard {...post} />
        </Grid>
      )}
    </Grid>
  )
}

export default App
