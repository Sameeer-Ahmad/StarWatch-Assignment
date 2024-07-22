

import { Badge } from "@/ui/badge";

import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from "@/ui/Cards";


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { Tabs, TabsContent } from "@/ui/tabs";

export function DataTable() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Deals Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] ">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Location
                        </TableHead>
                        <TableHead>Date-Time</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Amount
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Status
                        </TableHead>
                        
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        
                        <TableCell className="font-medium flex items-center gap-3">
                        {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="5"
                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDyaR0-zYCB54Qm_WSkDWiOcI3OvvVqLavg9hAxNGYIvlxZIwyg270W0kDuueJQtWM_X6vWy6xJmHWAkrgqLvNTKSH6AknswhitkIHxjYSvLILA5pdy96L&usqp=CAE"
                            width="5"
                          /> */}
                          Apple Watch
                        </TableCell>
                        <TableCell>6096 Marjolaine Landing</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          413
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Delivered</Badge>
                        </TableCell>
                      </TableRow>
                      

                      <TableRow>
                        
                        <TableCell className="font-medium flex items-center gap-3">
                        {/* <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="5"
                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDyaR0-zYCB54Qm_WSkDWiOcI3OvvVqLavg9hAxNGYIvlxZIwyg270W0kDuueJQtWM_X6vWy6xJmHWAkrgqLvNTKSH6AknswhitkIHxjYSvLILA5pdy96L&usqp=CAE"
                            width="5"
                          /> */}
                          iPhone 14 
                        </TableCell>
                        <TableCell>6096 Marjolaine Landing</TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          413
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Pending</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
