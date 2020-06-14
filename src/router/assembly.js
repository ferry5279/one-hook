import Loadable from '@@/Loadable'

// const App = Loadable(() => import('@/pages/app'))
const Home = Loadable(() =>
    import ('@/pages/home'))
const Login = Loadable(() =>
    import ('@/pages/login'))
const Lian = Loadable(() =>
    import ('@/pages/lian'))
const One = Loadable(() =>
    import ('@/pages/one'))
const Two = Loadable(() =>
    import ('@/pages/two'))
export {
    Home,
    Login,
    Lian,
    One,
    Two
}