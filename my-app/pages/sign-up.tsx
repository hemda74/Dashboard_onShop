import Image from 'next/image';
import Link from 'next/link';
import bgimage from '@/public/bg-image.jpg';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
export default function Dashboard() {
	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="flex items-center justify-center py-12">
				<Card className="mx-auto max-w-sm">
					<CardHeader>
						<CardTitle className="text-xl">
							Sign Up
						</CardTitle>
						<CardDescription>
							Enter your information
							to create an account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="first-name">
										First
										name
									</Label>
									<Input
										id="first-name"
										placeholder="Max"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="last-name">
										Last
										name
									</Label>
									<Input
										id="last-name"
										placeholder="Robinson"
										required
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">
									Email
								</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">
									Password
								</Label>
								<Input
									id="password"
									type="password"
								/>
							</div>
							<Button
								type="submit"
								className="w-full"
							>
								Create an
								account
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Already have an account?
							<Link
								href="/"
								className="underline"
							>
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="hidden bg-muted lg:block">
				<Image
					src={bgimage}
					alt="Image"
					width="1920"
					height="1080"
					className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
