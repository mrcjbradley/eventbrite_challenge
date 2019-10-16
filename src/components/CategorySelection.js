import React, { Component } from "react";
import { fetchAllCategories, fetchCategoryLocationEvents } from "../apiUtil";

class CategorySelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      events: []
    };
    this.handleCategorySelection = this.handleCategorySelection.bind(this);
  }

  componentDidMount() {
    fetchAllCategories().then(res => {
      this.setState({ categoryList: res.categories });
    });
  }

  handleCategorySelection(catId) {
    return e => {
      e.preventDefault();
      fetchCategoryLocationEvents(11237, 25, catId).then(({ events }) =>
        this.setState({ events })
      );
    };
  }

  render() {
    const categoryListLis = this.state.categoryList.map(category => {
      return (
        <li
          className="category-li"
          key={category.id}
          onClick={this.handleCategorySelection(category.id)}
        >
          {category.name}
        </li>
      );
    });
    const eventListLis = this.state.events.map(event => return <p>event here!</p>;);

    return <ul>{categoryListLis}</ul>;
  }
}
export default CategorySelection;
