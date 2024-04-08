import { useState } from "react";
import PageTitle from "src/components/Typography/PageTitle";
import {
  useGetCustomerList
} from "src/hooks/press/useCustomerSubmit";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    TableHeader,
  } from "windmill-react-ui-kit";
  import { FaDownload } from "react-icons/fa";


const AllCustomers = () => {

  const { data, isLoading, refetch } = useGetCustomerList();

  // Function to convert and download data in CSV format
  const exportToCSV = () => {
    if (data?.data?.length === 0) {
      console.error('No data to export.');
      return;
    }

    // Convert data to CSV format
    
    const csvContent = [
      ["Contact Person", "Email", "Phone", "Address","PAN","Company Name"],
      ...data?.data?.map(({ contact_person  , email, phone_number, address, pan }) => ([
        '\n'+ contact_person ,
        email ,
        phone_number,
        address ,
        pan,
        company_name,
      ]))
    ];
    //const csvContent = data?.data?.map(row => Object.values(row).join(',')).join('\n');

    // Create and download CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>ग्राहकहरु</PageTitle>
        <div className="flex gap-1 items-center justify-center bg-green-400 rounded-lg dark:bg-green-500 dark:text-white p-2">
            <button onClick={exportToCSV}>Download</button>
            <FaDownload />
        </div>
      </div>
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>क्र.स</TableCell>
                <TableCell>ग्राहकको नाम</TableCell>
                <TableCell>ईमेल</TableCell>
                <TableCell>सम्पर्क नं </TableCell>
                <TableCell>ठेगाना </TableCell>
              </tr>
            </TableHeader>

            <TableBody>
                {
                    data &&
                    data?.data?.map((order, i) => (
                    <TableRow key={i + 1}>
                        <TableCell>
                        <span className="font-semibold uppercase text-xs">{i + 1}</span>
                        </TableCell>
                        <TableCell>
                        <span className="text-sm">{order?.contact_person}</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm">{order?.email}</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm">{order?.phone_number}</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-sm">{order?.address}</span>
                        </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
};

export default AllCustomers;
