# project-3 Rescue Dog Outcomes
#### Angie Ong, Spencer LaFarge, Karl Unverferth, Kelly Priest
 
## Project Overview
<p> The animal rescue community is always trying to find ways to advocate for their animals. If there is a tool that can predict the outcome of a dog, then rescues can use that as a part of the deciscion making process for intake. Shelters can easily become overwhelmed with the number of animals in their care, if they take on animals that their facility cannot easily place. We wanted to build a tool that could predict the outcome of an animal at a facility. Using dog outcome data from the Department of Animal Services in Louisville, Kentucky, we built a model that would let a rescue know to deny or accept a dog based on their predicted outcome.

## Methods

### Finding the data
<p>Finding a data source with sufficient data prove to be a difficult task. There is not a standard set for recues to track intake and outake data. We were able to find to datasets to test our predictive models from Austin Animal Center and the Department of Animal Services Louisville Kentucky. Our final model uses the data from Louisville as the dataset was larger and had more complete information. The graphs use combined data from both Louisville and Austin

### Cleaning the Data
<p>Using pandas and python, we dropped the rows that were uneeded. The column PrimaryBreed had some cleaning to be done as some of the breeds were listed in several different ways, for example 'American Pit Bull Terrier' and 'Pit Bull Terrier.' The column for color we chose to group similar colors together and group distinct color patterns together. After cleaning the dataset, we then loaded it into a sqlite database.


### Testing the Models
<p>We tested the data with a variety of models and found that the neural network was best for our purposes. When testing the data we would see increases in acuracy if there were more rows of data. Also after some tuning of the categories we were able to increase our accuracy. 

## Final 
<p>For the final product we built a flask app and a website for a user to put in data into our predictive model. The model will then run the input and return deny or accept to the user to help make a decision on taking the dog into their care. There is also another page that visualizes the breakdown of adoption, euthanasia, transfer, and foster for each category; breeds, gender, colors, and age group. These graphs use data from both Louisville and Austin. Though using both datasets in our model did not work as the Louisville data was more complete; both did track the data we are visualizing in the bar graph. Using more data gives a better picture of the breakdown.

## Thoughts
<p>This project highlighted the need for a standardize database for rescues to use to track intake and outcome data. We wanted our project to show that there is this hole in data tracking. Our future goals with our website is to make it a system for rescues to track their data and feed that data into our model to make the model stronger. Also to make a predicitive model and data tracking system for other species of animals in rescue. 