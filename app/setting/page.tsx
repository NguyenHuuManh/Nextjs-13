
export default  function setting() {
    const fetchUser = () => {
        return fetch('https://dummyjson.com/users/1', { next: { revalidate: 3600 } })
            .then(res => res.json())
            .then(console.log)
    }
    fetchUser();
    return (
        <div>
            setting
        </div>
    )
}