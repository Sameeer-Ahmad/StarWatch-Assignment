"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa"
import { Button } from "@/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/ui/input"
import { Table, TableBody, TableCell, TableRow } from "@/ui/table"
import { Box, Flex } from "@chakra-ui/react"
import { MdDelete, MdError } from "react-icons/md"
import { CiStar } from "react-icons/ci"

const data: Payment[] = [
  {
    id: "1",
    name: "Jullu Jalal",
    description: "Our Bachelor of Commerce program is ACBSP-accredited.",
    icon:<CiStar />,
    date: "8:38 AM",
    status: "Primary",
  },
  {
    id: "2",
    name: "Minerva Barnett",
    description: "Get Best Advertiser In Your Side Pocket",
    icon:<CiStar />,
    date: "8:13 AM",
    status: "Work",
  },
  {
    id: "3",
    name: "Peter Lewis",
    description: "Vacation Home Rental Success",
    icon:<CiStar />,
    date: "7:52 PM",
    status: "Friends",
  },
  {
    id: "4",
    name: "Anthony Briggs",
    description: "Free Classifieds Using Them To Promote Your Stuff Online",
    icon:<CiStar />,
    date: "7:52 PM",
    status: "",
  },
  {
    id: "5",
    name: "Clifford Morgan",
    description: "Enhance Your Brand Potential With Giant Advertising Blimps",
    icon:<CiStar />,
    date: "4:13 PM",
    status: "Social",
  },
  {
    id: "6",
    name: "Cecilia Webster",
    description: "Always Look On The Bright Side Of Life",
    icon:<CiStar />,
    date: "3:52 PM",
    status: "Friends",
  },
  {
    id: "7",
    name: "Harvey Manning",
    description: "Curling Irons Are As Individual As The Women Who Use Them",
    icon:<CiStar />,
    date: "2:30 PM",
    status: "",
  },
  {
    id: "8",
    name: "Willie Blake",
    description: "Our Bachelor of Commerce program is ACBSP-accredited.",
    icon:<CiStar />,
    date: "8:38 AM",
    status: "Primary",
  },
  {
    id: "9",
    name: "Minerva Barnett",
    description: "Get Best Advertiser In Your Side Pocket",
    date: "8:13 AM",
    icon:<CiStar />,
    status: "Work",
  },
  {
    id: "10",
    name: "Fanny Weaver",
    description: "Free Classifieds Using Them To Promote Your Stuff Online",
    icon:<CiStar />,
    date: "7:52 PM",
    status: "",
  },
  {
    id: "11",
    name: "Olga Hogan",
    description: "Enhance Your Brand Potential With Giant Advertising Blimps",
    icon:<CiStar />,
    date: "4:13 PM",
    status: "Social",
  },
  {
    id: "12",
    name: "Lora Houston",
    description: "Vacation Home Rental Success",
    icon:<CiStar />,
    date: "7:52 PM",
    status: "Friends",
  },
]

export type Payment = {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  date: string
  status: "Primary" | "Work" | "Friends" | "Social"|""
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
   accessorKey:"icon",
    cell: ({ row }) => <Box fontSize={"xl"}>{row.getValue("icon")}</Box>,
  },
  {
    accessorKey: "name",
    header: "",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "date",
    header: "",
    cell: ({ row }) => {
      const date = row.getValue<string>("date")
      return <div className="text-right font-medium">{date}</div>
    },
  },
]

export function InboxTable() {
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  })

  return (
    <div style={{ borderRadius: "10px" }} className="w-full bg-white">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Search mail"
          className="max-w-sm ml-8"
          style={{ backgroundColor: "#f3f4f6" }}
        />
        <Flex mr={8} fontSize={"20px"} p={2} gap={4} border={"0.5px solid "} bg={"gray.100"} borderRadius={"10px"}>
          <FaRegImage />
          <MdError />
          <MdDelete />
        </Flex>
      </div>
      <div className="border">
        <Table>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm pl-8 text-muted-foreground">
          Showing 1-12 of 12
        </div>
        <div className="space-x-2 pr-8">
          <Button variant="outline" size="sm">
            <FaArrowLeft />
          </Button>
          <Button variant="outline" size="sm">
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
