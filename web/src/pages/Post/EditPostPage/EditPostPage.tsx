import EditPostCell from 'src/components/Post/EditPostCell'

type PostPageProps = {
  id: Int
}

const EditPostPage = ({ id }: PostPageProps) => {
  return <EditPostCell id={id} />
}

export default EditPostPage
