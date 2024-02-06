import StarRatings from 'react-star-ratings';

interface StarsProps extends React.ComponentProps<typeof StarRatings> {
  value: number;
}

const Stars = ({ value, ...props }: StarsProps) => (
  <StarRatings
    rating={value}
    starRatedColor="#336af8"
    numberOfStars={5}
    name="rating"
    starDimension="20px"
    starSpacing="0px"
    svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
    svgIconViewBox="0 0 24 24"
    {...props}
  />
);

export default Stars;
