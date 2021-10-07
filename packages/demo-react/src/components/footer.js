import { Component } from "react";
import propTypes from 'prop-types'

class Footer extends Component {
  render() {
    <div class={this.props.class_name}>Footer Component is {this.props.title}</div>;
  }
}

Footer.propTypes = {
  title: propTypes.string.isRequired
};

export default Footer;

const TableName = ({ name }) => (
  <S.TruncatedDiv width={160} title={name.length > 18 ? name : ''}> 
    <FaTable />
    <span style={{ marginLeft: '8px' }}>{name}</span>
  </S.TruncatedDiv>
);
