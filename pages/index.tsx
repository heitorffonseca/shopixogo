import {NextPage} from "next";
import App from "@/source/components/layout/App";
import {useGetDocs} from "@/source/hooks/firebase/useGetDocs";
import {useDispatch} from "react-redux";
import {setCategories, setProducts} from "@/source/store/firebase.slice";
import {ProductSession} from "@/source/components/products/ProductSession";
import { ProductInterface } from "@/source/interfaces/ProductInterface";

const Home: NextPage = () => {
    const dispatch = useDispatch();
    dispatch(setCategories(useGetDocs({ collectionName: 'categories' })));
    dispatch(setProducts(useGetDocs({ collectionName: 'products' })));

    return (
        <App>
            <ProductSession />
        </App>
    );
}

export default Home;