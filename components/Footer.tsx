import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">Copyright 2025 - Frederik Koch</p>
        <p className="text-muted-foreground/60">Powered by Lucide-React & Radix UI</p>
        <div className="mt-3">
          <Link
            href="/impressum"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
 
//   _____
//  |A .  | _____
//  | /.\ ||A ^  | _____
//  |(_._)|| / \ ||A _  | _____
//  |  |  || \ / || ( ) ||A_ _ |
//  |____V||  .  ||(_'_)||( v )|
//        |____V||  |  || \ / |
//               |____V||  .  |
//                     |____V|
                

