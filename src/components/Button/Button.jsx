import PropTypes from 'prop-types';
import { ButtonLoadMore } from 'components/Button/Button.styled';


export const LoadMore = ({ onLoadMore }) => {
  return <ButtonLoadMore onClick={onLoadMore}>Load More</ButtonLoadMore>;
};
LoadMore.propTypes = {
  onLoadMore: PropTypes.func,
};