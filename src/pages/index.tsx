// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import ProfileProps from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
   <RecipeList />
  )
}
