import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router'

class PostsIndex extends Component {
  componentWillMount(){//about to render into the DOM, is called once
   this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        List of blogs
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }

// export default connect(null,mapDispatchToProps)(PostsIndex);
export default connect(null,{fetchPosts})(PostsIndex);
