import React, { useState } from 'react';

function NewListingCard({ onNewListing }) {
    const [newListing, setNewListing] = useState({
        description: '',
        image: '',
        location: '',
    });

    function handleNewListingChange(e) {
        // console.log("in handleNewListingChange, name: ", e.target.name, ", value: ", e.target.value);
        switch(e.target.name) {
            case 'description': 
                setNewListing({...newListing, description: e.target.value});
                break;
            case 'image': 
                setNewListing({...newListing, image: e.target.value});
                break;
            case 'location': 
                setNewListing({...newListing, location: e.target.value});
                break;
        }
    }

    function handleNewListingSubmit(e) {
        e.preventDefault();
        // console.log('in handleNewListingSubmit e', e);

        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newListing),
        })
        .then(resp => resp.json())
        .then(listing => onNewListing(listing));

        setNewListing({
            description: '',
            image: '',
            location: '',
        });
    }

    return (
        <div className='newListing'>
            <form onSubmit={handleNewListingSubmit}>
                <label>Description: </label>
                <input name='description' value={newListing.description} onChange={handleNewListingChange} />
                <br />
                <label>Image: </label>
                <input name='image' value={newListing.image} onChange={handleNewListingChange} />
                <br />
                <label>Location: </label>
                <input name='location' value={newListing.location} onChange={handleNewListingChange} />
                <br />
                <input type='submit' value='Submit' />
                <br />
            </form>
        </div>
    );
}

export default NewListingCard;