import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



export default function Post({ post}) {
  return (
		<div className="flex justify-center mt-8 mb-10 ">
			<Card className="flex-row w-full  max-w-[70rem] h-96">
				<CardHeader
					shadow={false}
					floated={false}
					className="w-2/5 shrink-0 m-0 rounded-r-none"
				>
					<img
						src={post.bannerUrl}
						alt="image"
						className="w-full h-full object-cover"
					/>
				</CardHeader>
				<CardBody>
					<Typography variant="h6" className="uppercase mb-4 text-gray-700">
						{post.title}
					</Typography>
					<Typography variant="h4" color="blue-gray" className="mb-2">
						Written By- {post.ownerName}
					</Typography>
					<Typography color="gray" className="font-normal mb-8">
						{post.brief}
					</Typography>
					<Link to={`/post/${post._id}`}>
						<Button
							variant="text"
							className="flex items-center text-black hover:bg-gray-200 bg-gray-100 gap-2"
						>
							Learn More
							<ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
						</Button>
					</Link>
				</CardBody>
			</Card>
		</div>
	);
}
