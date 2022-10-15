import { TextField, Button } from "@mui/material";

export default function New(){
    return(
        <div className="w-4/5 ml-auto mr-auto">
            <h1 className="text-2xl mt-9">Write a new Blog!</h1>
            <form id="newBlog" className="mt-6 grid grid-cols-1 gap-y-8">
                <TextField 
                    id="title"
                    label="Title" 
                    variant="standard"
                    placeholder="A title for the blog"
                    />
                
                <TextField
                    id="content"
                    label="Content"
                    variant="standard"
                    multiline
                    placeholder="Here goes the blog content"/>

                <Button variant="contained">Submit</Button>
            </form>
        </div>
    );
}