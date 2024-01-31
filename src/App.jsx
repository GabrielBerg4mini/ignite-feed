/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/107642863?v=4",
      name: "Gabriel Bergamini",
      role: "Desenvolvedor Web @Freelancer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { id: 3, type: "link", content: "👉 jane.design/doctorcare" },

      {
        id: 4,
        type: "container",
        links: [
          {
            id: 5,
            type: "link",
            content: "#novoprojeto",
          },
          {
            id: 6,
            type: "link",
            content: "#nlw",
          },
          {
            id: 7,
            type: "link",
            content: "#rocketseat",
          },
        ],
      },
    ],
    publishedAt: new Date("2024-01-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/42788841?v=4",
      name: "Wendell Rodrigues",
      role: "Desenvolvedor Java @CI&T",
    },
    content: [
      { id: 8, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 9,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 10, type: "link", content: "👉 jane.design/doctorcare" },
      {
        id: 11,
        type: "container",
        links: [
          {
            id: 12,
            type: "link",
            content: "#novoprojeto",
          },
          {
            id: 13,
            type: "link",
            content: "#nlw",
          },
          {
            id: 14,
            type: "link",
            content: "#rocketseat",
          },
        ],
      },
    ],
    publishedAt: new Date("2024-01-27 16:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            // eslint-disable-next-line no-extra-semi, react/jsx-key
            return (
              // eslint-disable-next-line react/jsx-key
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
