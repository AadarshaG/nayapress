import * as dayjs from "dayjs";
import { Badge, TableBody, TableCell, TableRow } from "windmill-react-ui-kit";

import useToggleDrawer from "../../hooks/useToggleDrawer";
import CouponDrawer from "../drawer/CouponDrawer";
import MainDrawer from "../drawer/MainDrawer";
import MainModal from "../modal/MainModal";
import EditDeleteButton from "../table/EditDeleteButton";

const CouponTable = ({ coupons }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <CouponDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {coupons.map((coupon, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {coupon._id.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {" "}
                {dayjs(coupon.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {" "}
                {dayjs(coupon.endTime).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm"> {coupon.title}</span>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm"> {coupon.couponCode}</span>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                {" "}
                {coupon.discountPercentage}%
              </span>{" "}
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm"> {coupon.productType}</span>{" "}
            </TableCell>

            <TableCell className="align-middle ">
              {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                <Badge type="danger">Expired</Badge>
              ) : (
                <Badge type="success">Active</Badge>
              )}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={coupon._id}
                title={coupon.title}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CouponTable;
