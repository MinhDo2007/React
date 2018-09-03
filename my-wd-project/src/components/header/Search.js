import React, { Component, Fragment } from 'react';
import { translate } from 'react-i18next';

const bgTransBtn = {
  backgroundColor: 'deeppink',
  borderColor: 'deeppink',
  color: 'white'
}

class Search extends Component {
  render(){
    const {t, i18n} = this.props
    return (
      <Fragment>
        <div className="sentence">
          <p className="translate-btn">
            <button onClick={() => i18n.changeLanguage('vi')}
              className="btn btn-default custom-translate-btn"
              style={i18n.language === 'vi' ? bgTransBtn : {}}>
              vi
            </button>
            <button onClick={() => i18n.changeLanguage('en')}
              className="btn btn-default custom-translate-btn"
              style={i18n.language === 'en' ? bgTransBtn : {}}> 
              en
            </button>
          </p>
          {t('header.sentencers1')}<br />
          {t('header.sentencers2')}
        </div>
      </Fragment>
    )
  }
}

export default translate('common')(Search);
