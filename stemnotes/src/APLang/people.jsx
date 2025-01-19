export default function people() {
    return (
        <div className="w-full h-full p-12">
            <h1 className="text-2xl font-bold underline">People</h1>

            <h2 className="text-xl font-bold">List of people to know</h2>
            <p>this is a brief overview of each person we went over in class and their beliefs with the reading.</p>
            
            <div>
                <h3 className="text-lg font-semibold">Philosophers</h3>
                <div className="w-full p-4 border-b border-gray-200">Plato</div>
                <div className="w-full p-4 border-b border-gray-200">Peter Singer</div>
                <div className="w-full p-4 border-b border-gray-200">Ruth Benedict</div>
                <div className="w-full p-4 border-b border-gray-200">Louis Pojman</div>
                <div className="w-full p-4 border-b border-gray-200">Sam Harris</div>
                <div className="w-full p-4 border-b border-gray-200">John Stuart Mill</div>
                <div className="w-full p-4 border-b border-gray-200">Kant</div>
                <div className="w-full p-4 border-b border-gray-200">Bertrand Russel</div>
                <div className="w-full p-4 border-b border-gray-200">Richard Rorty</div>
            </div>

            <div>
                <h3 className="text-lg font-semibold">Authors</h3>
                <div className="w-full p-4 border-b border-gray-200">Tim O'Brien</div>
                <div className="w-full p-4 border-b border-gray-200">Viet Thanh Nguyen</div>
                <div className="w-full p-4 border-b border-gray-200">James Lowen</div>
            </div>
        </div>  
    )
}