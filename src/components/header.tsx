import { Button, Input, Navbar, Typography } from '@material-tailwind/react';

export function Header() {
  return (
    <header>
      <Navbar className="mx-auto max-w-screen-xl rounded-none px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="ml-2 mr-4 cursor-pointer py-1.5"
          >
            <h1>Weather Report</h1>
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Weather in city..."
              className="pr-20"
              containerProps={{
                className: 'min-w-[288px]',
              }}
            />
            <Button size="sm" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
