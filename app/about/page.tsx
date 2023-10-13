import { Suspense } from "react";

const fetchUser = () => {
    return fetch('https://dummyjson.com/users/1')
        .then(res => res.json())
}

const fetchUserList = () :Promise<any>=> {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/users', { cache: 'force-cache' })
                .then(res => resovle(res.json()));
        }, 3000)
    })
    // return fetch('https://dummyjson.com/users', { cache: 'force-cache' })
    //     .then(res => res.json());
}
interface user {
    firstName: string,
    id: number,
    lastName: string,
    maidenName: string,
    age: number,
}

async function ListUser() {
    const data: { users: user[] } = await fetchUserList();
    return (
        <div style={{ height: 300, overflow: "scroll" }}>
            {data?.users.map(({ firstName, id }) => (
                <div key={id}>{firstName}</div>
            ))}
        </div>
    )
}

async function AboutMe() {
    const data: user = await fetchUser();
    return (
        <div>
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
            <div>{data.age}</div>
        </div>
    )
}

export default async function about() {

    return (
        <div>
            <Suspense fallback={<div>loading....</div>}>
                <ListUser />
            </Suspense>
            <AboutMe />
        </div>
    )
}