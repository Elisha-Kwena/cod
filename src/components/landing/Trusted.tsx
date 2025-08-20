

const trustee=[
    {id:1,logo:"https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",name:"Sass"},
    {id:2,logo:"https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg", name:"NPM"},
    {id:3,logo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", name:"React"},
    {id:4,logo:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", name:"NodeJS"},
    {id:5,logo:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", name:"Python"},
    {id:6,logo:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg", name:"Laravel"},
]

export default function Trusted () {
    return(
        <>
        <div className="w-full flex items-center justify-center flex-col gap-3">
            <div className="w-full">
                <h1 className="text-chrome text-lg lg:text-2xl font-fira-code font-extrabold text-center">Trusted by Developers at</h1>
                <div className="w-full flex items-center justify-center lg:justify-between flex-wrap gap-4 mt-8">
                    {trustee.map((item) => (
                        <div key={item.id} className="flex items-center justify-center gap-2">
                            <img src={item.logo} alt={item.name} className="w-20 h-20 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}