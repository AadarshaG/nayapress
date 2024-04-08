import { Card, CardBody } from 'windmill-react-ui-kit';

const CardItemTwo = ({
  mode,
  title,
  Icon,
  className,
  price,
  currency,
  cash,
  card,
  credit,
  loading,
  title2,
  handleChange
}) => {
  return (
    <>
     <>
          {title === "Today's Sales Amount" || title === "Weekly Sales" || title === "Monthly Sales" ? (
            <Card className={`flex justify-center h-full`}>
              <CardBody
                className={`border border-gray-200 justify-between dark:border-gray-800 w-full p-6 rounded-lg ${className}`}
              >
                <div className="text-center xl:mb-0 mb-3">
                  {/* <div
                    className={`text-center inline-block text-3xl ${className}`}
                  >
                    <Icon />
                  </div> */}
                  <div>
                    <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                      {title2 ? `${title2}` : "" }
                    </p>
                    <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
                      {/* ${Math.round(price)} */}
                      Rs.
                      {Number(price)}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ) : (
            <div onClick={handleChange}>
              <Card className="flex justify-center text-center h-full cursor-pointer">
              <CardBody
                className={`border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg ${className}`}
              >
                {/* <div 
                  className={`text-center inline-block text-3xl ${className}`}
                >
                  <Icon />
                </div> */}
                <div>
                  <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
                  {title2 ? `${title2}` : "" }
                  </p>
                  <div
                    className={`text-center inline-block text-3xl ${className}`}
                  >
                    <Icon />
                  </div>
                </div>
              </CardBody>
            </Card>
            </div>
          )}
        </>
    </>
  );
};

export default CardItemTwo;
