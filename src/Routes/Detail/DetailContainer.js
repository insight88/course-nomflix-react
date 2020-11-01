import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { 
      location: { pathname } 
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/moive/")
    };
  }

  async componentDidMount() {
    const { 
      match: {
        params: { id }
      },
      history: { push },
      locaiton: { pathname }
    } = this.props;
    const { isMovie } = this.state
    this.isMovie = pathname.includes("/movie/")
    const parsedId = parseInt(id)
    // * props.match.params.id는 query string이므로 String type
    if (isNaN(parsedId)) {
      return push("/");
      // * id가 숫자가 아닐 때, "/"로 redirect하고 함수를 종료한다
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId)
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parseId)
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find anything" })
    } finally {
      this.setState({ loading: false, result })
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}