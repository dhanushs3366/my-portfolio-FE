import { useState } from "react";
import { createBlog } from "../../api/Logger";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [content, setContent] = useState("");
  const [title,setTitle]=useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) {
      alert("Content cannot be empty!");
      return;
    }

    setIsSubmitting(true);

    async function submitBlog() {
      try {
        const response = await createBlog(title,content);
        navigate("/blogs")
      } catch (error) {
        console.error("Error creating blog:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }

    submitBlog();
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-gradient-to-b from-black to-green-900 rounded shadow-lg"
      >
        <h2 className="text-3xl text-green-500 font-bold mb-6 text-center">
          Create a Blog Post
        </h2>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-green-500 text-lg mb-2"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            className="bw-full h-auto w-full p-2 bg-black border border-green-600 text-green-500 placeholder-green-400 rounded"
            placeholder="Title goes here..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-green-500 text-lg mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            className="w-full h-40 p-2 bg-black border border-green-600 text-green-500 placeholder-green-400 rounded"
            placeholder="Type your hacker thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 text-lg font-bold bg-green-600 hover:bg-green-700 text-black rounded ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
