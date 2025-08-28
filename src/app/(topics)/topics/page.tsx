"use client"
import { useState, useEffect } from "react"
import TopicsSuccessModal from "@/components/ui/Modals/TopicsSuccessModal";
import TopicsSkeleton from "@/components/ui/loaders/TopicSkeleton";

import { allTopics, categories,defaultTopics } from "@/data/topics"

export default function Topics(){
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // simulating loading

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setIsLoading(false);
        }, 1500)

        return () => clearTimeout(timer)
    })

    // Toggle Selected Topic
    const [selectedTopic, setSelectedTopic] = useState<string[]>(defaultTopics);
    const ToggleTopics = (topic: string) => {
        setSelectedTopic(prev =>
            prev.includes(topic)
                ? prev.filter(t => t !== topic)
                : [...prev, topic]
        );
    };

    // useEffect(() =>{
    //     console.log("selected topics", selectedTopic)
    // }, [selectedTopic])


    // category selection

    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredTopics, setFilteredTopics] = useState<string[]>(allTopics)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);




    // filtering topics based on category and search
    useEffect(() => {
        let result = allTopics;

        // filter by category
        if (
            selectedCategory &&
            selectedCategory !== "" &&
            Object.prototype.hasOwnProperty.call(categories, selectedCategory)
        ) {
            result = categories[selectedCategory as keyof typeof categories];
        }
    
        // filter by search
        if (searchQuery.trim() !== ""){
            result = result.filter(topic =>
                topic.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
    
        setFilteredTopics(result);
    }, [selectedCategory,searchQuery])

    // Handle Category change
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedCategory(e.target.value);
    }

    // Handle search form submit
    const handleSearch = (e:React.FormEvent)=>{
        e.preventDefault();
    }



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh
        console.log("Selected Topics:", selectedTopic);
        console.log("Number of topics selected:", selectedTopic.length);
        setIsModalOpen(true)
        // You can add more logic here later:
        // - API call to save preferences
        // - Redirect to next page
        // - Show success message
      };

    const handleNodalClose = () =>{
        setIsModalOpen(false)
    }


    if (isLoading){
        return <TopicsSkeleton/>
    }





























    return(
        <>
        <div className="h-screen w-full flex items-center justify-start px-2 lg:px-0 py-4 flex-col">
            <h1 className="text-sapphire text-2xl lg:text-4xl font-extrabold text-center">What are you interested in?</h1>
            <p className="text-black dark:text-white text-md lg:text-xl text-center">Select your favorite topics. This helps us personalize your community feed. (Don&apos;t worry, you can change these later.)</p>

            {/* search form */}
            <div className="lg:w-[90%] w-[95%] flex flex-col gap-2 items-center justify-between p-2 rounded-md border border-dark800/10 dark:border-chrome/10 mx-auto mt-4 bg-[#ffffff] dark:bg-dark800 shadow-lg">
                <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between p-1 rounded-md borderborder-dark800/10 dark:border-chrome/10 mx-auto bg-off_white dark:bg-dark800">
                    <form onSubmit={handleSearch} className="w-full lg:w-2/4 flex items-center justify-center gap-4">
                        <input 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text" className="p-2 pl-6 w-[95%] text-dark700 dark:text-white focus:outline-sapphire focus:border-sapphire focus:ring-0 border border-dark800/10 dark:border-chrome/10 bg-white dark:bg-dark800 rounded-[3px]" placeholder="Search Topic ..."/>
                        <button 
                        type="submit"
                        className="p-2 text-md rounded-[3px] px-4 text-white bg-sapphire">Search</button>
                    </form>
                
                {/* Categories */}
                    <select 
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="appearance-none bg-[length:1.5rem_1.5rem] bg-[position:right_0.5rem_center] bg-no-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgOEwxMCAxMkwxNCA4IiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] border border-gray-300 dark:border-chrome/10 text-gray-900 dark:text-gray-300 bg-white dark:bg-dark800 rounded-[4px] p-2 pr-8 text-md w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sapphire focus:border-transparent"
                        >
                            <option value="">All Categories</option>
                            {Object.keys(categories).map((categoryName) => (
                                <option 
                                    key={categoryName} 
                                    value={categoryName}
                                    className="bg-white dark:bg-dark800 text-gray-900 dark:text-gray-300 ui-checked:bg-gray-100 ui-checked:dark:bg-gray-700 ui-checked:text-blue-600 ui-checked:dark:text-sapphire"
                                    >
                                    {categoryName}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="w-full">
                    <h1 className="text-black dark:text-white">Default Topics</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                        {defaultTopics.map((topic, index) => (
                          <button
                            key={index}
                            type="button"
                            className="topic-btn bg-dark-800 rounded-lg shadow-lg border border-dark-600 hover:bg-dark-700 bg-sapphire border-sapphire text-white transition-all duration-200 text-xs sm:text-sm font-medium text-center break-words p-2 flex items-center justify-center">
                            {topic}
                          </button>
                        ))}
                      </div>
                </div>

            </div>

            <div className="topics lg:w-[90%] w-[95%] mt-4 pb-4">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">

                    {/* topics */}
                    <div className="w-full lg:max-h-[400px] max-h-[70vh] overflow-y-auto">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-2">
                        {filteredTopics.map((topic, index) => (
                          <button
                            key={index}
                            onClick={() => ToggleTopics(topic)}
                            type="button"
                            className={`topic-btn p-0 bg-dark-800 rounded-lg shadow-lg border border-chrome/10 hover:bg-dark-700 hover:border-sapphire transition-all duration-200 text-xs sm:text-sm text-black dark:text-white font-medium text-center break-words min-h-[40px] flex items-center justify-center ${selectedTopic.includes(topic)
                                ? 'bg-sapphire border-sapphire text-white  shadow-lg '
                                : 'bg-white dark:bg-black border-chrome/70 text-black dark:text-white'
                            }`}>
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>




                    <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-4">
                        <button 
                        onClick={() => setSelectedTopic(defaultTopics)}
                        type="button" className="w-full lg:w-auto p-2 text-sapphire backdrop-blur-lg bg-sapphire px-6 font-extrabold border-[2px] border-sapphire rounded-[5px] bg-transparent">Select Default</button>
                        <button 
                        onClick={handleSubmit}
                        type="submit" className="w-full lg:w-auto p-2 text-white bg-sapphire px-6 font-extrabold border-[2px] border-sapphire rounded-[5px] ">Submit selected ({selectedTopic.length})</button>
                    </div>
                </form>


            </div>
        </div>
        <TopicsSuccessModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            redirectUrl="/dashboard"
            selectedTopicsCount={selectedTopic.length} // Pass the count here
        />
        </>
    )
}