import * as React from 'react';
import __ from '../i18n/Language';
import { Link } from 'react-router-dom';

// URL = /
export default class Root extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Link to={"/"}>To URL /</Link><br/>
        <Link to={"/home"}>To URL /home</Link><br/>
        <Link to={"/hosdfsdfme"}>No match link /hosdfsdfme</Link>
        <p>match : {this.props.match.path}</p>
        <p>location : {this.props.location.pathname}</p>
        <p>query : {this.props.location.query}</p>
        <p>{__('application.hello')}</p>
      </div>
    );
  }
}
