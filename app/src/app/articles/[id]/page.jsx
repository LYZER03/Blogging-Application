'use client'
import { useRouter ,usePathname} from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image';
import articles from '../page';


export default function ArticlePage({ params }) {
  const router = useRouter();
  const supabase = createClientComponentClient()
  const {id} = params
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthor, setIsAuthor] = useState(false);

  const [editing, setEditing] = useState(false);
  const [editedArticle, setEditedArticle] = useState({
    title: articles.title,
    content: articles.content,
    newImage: null, // Champ d'entrée pour la nouvelle image
    category: articles.category,
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditCancel = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    // Si le champ d'entrée est de type "file", cela signifie qu'il s'agit du champ de la nouvelle image
    const newValue = name === 'newImage' ? files[0] : value;

    setEditedArticle((prev) => ({ ...prev, [name]: newValue }));
  };
  
  useEffect(() => {
    const checkAuthor = async () => {
      // Vérifiez si l'utilisateur actuellement authentifié est l'auteur de l'article
      const {data: {session}} = await supabase.auth.getSession();
      const user = session.user

      if (user && article) {
        const authorId = article.author_id;
        // Vérifiez si l'auteur de l'article est l'utilisateur actuellement authentifié
        if (authorId === user.id) {
          setIsAuthor(true);
        }
      }
    };

    checkAuthor();
  }, [article]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const { error } = await supabase.from('articles').delete().eq('id', id);

      if (error) {
        console.error('Error deleting the article', error);
      } else {
        router.push('/articles');
      }
    }
  };

  const handleEditSubmit = async () => {
    // Si une nouvelle image est fournie, téléchargez-la
    let newImageUrl = editedArticle.image_url;
    if (editedArticle.newImage) {
      const fileExt = editedArticle.newImage.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: image, error: uploadError } = await supabase.storage
        .from('article-images') 
        .upload(fileName, editedArticle.newImage);

      if (uploadError) {
        console.error('Error uploading new image', uploadError);
        return;
      }

      const { data } = await supabase.storage.from('article-images').getPublicUrl(fileName);
      newImageUrl = data.publicUrl;
    }

    // Effectuez la mise à jour de l'article avec les données modifiées
    const { error } = await supabase
      .from('articles')
      .update({
        title: editedArticle.title,
        content: editedArticle.content,
        image_url: newImageUrl,
        category: editedArticle.category,
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating the article', error);
    } else {
      setEditing(false);
      // Rechargez l'article après la mise à jour
      fetchArticle(id);
    }
  };


  const fetchArticle = async (articleId) => {
    if (!articleId) return

    const { data, error } = await supabase
      .from('articles')
      .select('*, profiles(full_name)')
      .eq('id', articleId)
      .single()
      
    if (error) {
      console.error('Error loading the article', error);
    } else {
      setArticle(data)
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchArticle(id)
  }, [id]);

  const myLoader=({src})=>{
    return article.image_url
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!article) {
    return <div>The article is not found.</div>
  }

  const formattedDate = article && new Date(article.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  return (
    <div className="min-h-screen bg-gray-100 p-5 font-sans">
      <div className="block lg:flex lg:items-center lg:justify-between">
        {article.image_url && (
          <div className="relative h-72 lg:w-1/2 mb-6 lg:mb-0">
            <Image 
              loader={myLoader} 
              src={article.image_url} 
              alt={article.title} 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{article.title}</h1>
          <p className="text-sm text-gray-500">Written by {article.profiles.full_name} on {formattedDate}</p>
          <p className="text-sm text-gray-500">Category: {article.category}</p>
        </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <p>{article.content}</p>
      </div>

      {isAuthor && (
        <>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            style={{marginRight: '8px'}}
          >
            Delete Article
          </button>

          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-2"
          >
            Edit Article
          </button>

          {editing && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Article</h2>
                <label htmlFor="editTitle" className="block mb-2">
                  Title:
                  <input
                    type="text"
                    id="editTitle"
                    name="title"
                    value={editedArticle.title}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </label>
                <label htmlFor="editContent" className="block mb-2">
                  Content:
                  <input
                    type="text"
                    id="editContent"
                    name="content"
                    value={editedArticle.content}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </label>
                <label htmlFor="editCategory" className="block mb-2">
                  Category:
                  <input
                    type="text"
                    id="editCategory"
                    name="category"
                    value={editedArticle.category}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </label>
                <label htmlFor="editNewImage" className="block mb-2">
                  New Image:
                  <input
                    type="file"
                    id="editNewImage"
                    name="newImage"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </label>

                <button
                  onClick={handleEditSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleEditCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};