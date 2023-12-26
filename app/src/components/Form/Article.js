
import { useState } from 'react';

export default function ArticleForm({ onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title 
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
     
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
        />
      </div> 
      <div className="text-center">
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Save Article'}
        </button>
      </div>
    </form>
  );
}