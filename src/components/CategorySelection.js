import React, { Component } from "react";
import { fetchAllCategories } from "../apiUtil";

class CategorySelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      events: []
    };
  }

  componentDidMount() {
    fetchAllCategories().then(res => {
      this.setState({ categoryList: res.categories });
    });
  }

  render() {
    const categoryListLis = this.state.categoryList.map(category => {
      return (
        <li className="category-li" key={category.id}>
          {category.name}
        </li>
      );
    });
    return <ul>{categoryListLis}</ul>;
  }
}
export default CategorySelection;
