// interface IArticle {
//     id: number;
//     title: string;
//     body: string;
//   }

//   type ArticleState = {
//     articles: IArticle[];
//   };

//   type ArticleAction = {
//     type: string;
//     article: IArticle;
//   };


interface InitialState {
    ubication: string | null;
}

interface StateRedux {
    type: string,
    payload: string | null
}

type DispatchType = (args: StateRedux) => StateRedux;

interface ProcessEnv {
    [key: string]: string | undefined
}