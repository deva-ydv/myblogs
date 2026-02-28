import { assets } from "../../assets/assets"
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment
  const { axios } = useAppContext()

  const approveComment = async () => {
    try {
      const { data } = await axios.post(
        '/api/admin/approve-comment',
        { id: _id }
      )

      if (data.success) {
        toast.success(data.message)
        fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteComment = async () => {
    if (!window.confirm('Delete this comment?')) return

    try {
      const { data } = await axios.post(
        '/api/admin/delete-comment',
        { id: _id }
      )

      if (data.success) {
        toast.success(data.message)
        fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="border-y border-gray-300">
      <td className="px-6 py-4">
        <b>Blog</b> : {blog?.title || "Deleted Blog"}
        <br /><br />
        <b>Name</b> : {comment.name}
        <br />
        <b>Comment</b> : {comment.content}
      </td>

      <td className="px-6 py-4 max-sm:hidden">
        {new Date(createdAt).toLocaleDateString()}
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              className="w-5 cursor-pointer"
              alt="approve"
            />
          ) : (
            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
              Approved
            </span>
          )}

          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            className="w-5 cursor-pointer"
            alt="delete"
          />
        </div>
      </td>
    </tr>
  )
}

export default CommentTableItem

