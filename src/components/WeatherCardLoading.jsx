import { Card, CardBody, CardHeader } from '@heroui/card';
import { Skeleton } from '@heroui/skeleton';
import React from 'react';

export default function WeatherCardLoading() {
	return (
		<Card className='items-center bg-primary-500 night:bg-primary-800 w-56'>
			<CardHeader className='flex justify-center pt-2'>
				<Skeleton className='bg-primary rounded-lg size-28' />
			</CardHeader>
			<CardBody className='items-center gap-2'>
				<Skeleton className='bg-primary rounded-lg h-4 w-1/3' />
                <Skeleton className='bg-primary rounded-lg h-4 w-2/4' />
                <Skeleton className='bg-primary rounded-lg h-4 w-3/4' />
                <Skeleton className='bg-primary rounded-lg h-4 w-2/3' />
			</CardBody>
		</Card>
	);
}
