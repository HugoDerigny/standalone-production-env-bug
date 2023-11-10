export default function RootLayout({children}) {
    console.log(`Environmnent is ${process.env.NODE_ENV}`);
    console.log(process.env.MY_VALUE);
    console.log(process.env.NEXT_PUBLIC_MY_VALUE);

    return (
        <html>
        <head/>
        <body>{children}</body>
        </html>
    )
}
