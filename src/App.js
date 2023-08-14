import React, {useState} from 'react';
import {Button, Container, TextField, Grid, TextareaAutosize} from '@mui/material';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleHobolo = () => {
        // Sessiz harfleri "o" ile değiştirme işlemi
        const updatedValue = inputValue.replace(/[aeıiöuü]/gi, 'o').replace(/[aeıiöuü]/gi,'O');
        setOutputValue(updatedValue);
    };

    const handleSezercik = () => {
        // Sessiz harfleri "o" ile değiştirme işlemi
        const updatedValue = inputValue.replace('r', 'y').replace('R', 'Y');
        setOutputValue(updatedValue);
    };

    return (
        <Container>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{minHeight: '100vh'}}
            >
                <Grid item>
                    <TextField
                        variant="outlined"
                        placeholder="Write something"
                        multiline
                        rows={5}
                        rowsMax={10}
                        fullWidth
                        sx={{width: '400px'}}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Grid>
                <Grid item direction="column" columnSpacing={5}>
                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={handleHobolo}>
                            Hobolo >>>
                        </Button>
                    </Grid>
                    <Grid item marginTop={5}>
                        <Button variant="contained" color="secondary" fullWidth onClick={handleSezercik}>
                            Sezercik >>>
                        </Button>
                    </Grid>

                </Grid>
                <Grid item>
                    <TextField
                        variant="outlined"
                        placeholder="Write something"
                        multiline
                        rows={5}
                        rowsMax={10}
                        fullWidth
                        sx={{width: '400px'}}
                        InputProps={{readOnly: true}}
                        value={outputValue}
                        onChange={(e) => setOutputValue(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;