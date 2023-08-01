import {NextPage} from "next";
import App from "@/source/components/layout/App";
import {useGetDocs} from "@/source/hooks/firebase/useGetDocs";
import {useDispatch} from "react-redux";
import {setCategories} from "@/source/store/firebase.slice";
import AllCards from "@/source/components/categories/card/AllCards";

const Home: NextPage = () => {
    const dispatch = useDispatch();
    dispatch(setCategories(useGetDocs({ collectionName: 'categories' })))

    return (
        <App>
            <section>
                <AllCards/>
            </section>
        </App>
    );
}

export default Home;