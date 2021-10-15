export const getStaticPaths = async () => {
    const rest = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await rest.json()

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const rest = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await rest.json()

    return {
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
     );
}
 
export default Details;