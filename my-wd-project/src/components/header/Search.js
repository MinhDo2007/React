import React, { Component } from 'react';

class Search extends Component {
  render(){
    return (
      <div>
        <div className="input-group" id="search">
          <input type="text" className="form-control h-70" placeholder="Search" />
          <div className="input-group-btn">
            <button className="btn btn-default h-70" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
        <div className="sentence">
          <i><div className="mb-5">Anh ở đây không phải bởi vì số mệnh hay vì anh bị mắc kẹt ở đây </div>
          <div>Mà bởi bì Anh muốn được ở bên em hơn bất kỳ nơi nào khác trên thế giới</div></i>
        </div>
      </div>
    )
  }
}

export default Search;
