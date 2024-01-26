import LikeButton from './like-btn'

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>
}

function HomePage() {
  const names = ['Cameron', 'Marta']

  return (
    <div>
      <Header title="home page" />
      <ul>
        {names.map((name) => {
          ;<li key={name}>{name}</li>
        })}
      </ul>

      <LikeButton />
    </div>
  )
}

export default HomePage
