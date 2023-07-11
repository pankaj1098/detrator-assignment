import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import UserPage from "./components/UserPage";

export default function Home() {
  return (
    <div className="home">
      <PostPage />
      <div className="sidebar">
        <UserPage />
      </div>
      <div className="main-content">
        <HomePage />
      </div>
    </div>
  );
}
