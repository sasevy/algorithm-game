// script.js
document.addEventListener('DOMContentLoaded', function() {
    const seeResultsButton = document.getElementById('see-results');
    const candidatesSection = document.getElementById('candidates-section');
    const resultsSection = document.getElementById('results-section');
    const resultsContent = document.getElementById('results-content');
    
    seeResultsButton.addEventListener('click', function() {
        // Get selected algorithm
        const selectedAlgorithm = document.querySelector('input[name="algorithm"]:checked');
        
        if (!selectedAlgorithm) {
            alert('Please select an algorithm first!');
            return;
        }
        
        // Show candidates section
        candidatesSection.style.display = 'block';
        
        // Show results based on selection
        showResults(selectedAlgorithm.value);
        
        // Show results section
        resultsSection.style.display = 'block';
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    function showResults(algorithm) {
        let content = '';
        
        switch(algorithm) {
            case 'traditional':
                content = `
                    <p>The <strong>"Traditional Success" Algorithm</strong> ranked candidates as follows:</p>
                    <table class="results-table">
                        <tr>
                            <th>Rank</th>
                            <th>Candidate</th>
                            <th>Score</th>
                            <th>Key Factors</th>
                        </tr>
                        <tr class="highlight">
                            <td>1</td>
                            <td>Candidate A</td>
                            <td>94/100</td>
                            <td>Ivy League degree, prestigious employer</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Candidate B</td>
                            <td>78/100</td>
                            <td>State university, continuous employment</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Candidate D</td>
                            <td>65/100</td>
                            <td>Experience at top company, but no degree</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Candidate C</td>
                            <td>58/100</td>
                            <td>Community college degree, small companies</td>
                        </tr>
                    </table>
                    <p>This algorithm heavily rewards elite credentials and uninterrupted career paths, potentially missing skilled candidates without traditional backgrounds.</p>
                `;
                break;
                
            case 'skills':
                content = `
                    <p>The <strong>"Skills-First" Algorithm</strong> ranked candidates as follows:</p>
                    <table class="results-table">
                        <tr>
                            <th>Rank</th>
                            <th>Candidate</th>
                            <th>Score</th>
                            <th>Key Factors</th>
                        </tr>
                        <tr class="highlight">
                            <td>1</td>
                            <td>Candidate C</td>
                            <td>92/100</td>
                            <td>Highest technical score, 7 years experience</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Candidate D</td>
                            <td>85/100</td>
                            <td>Strong portfolio, high technical score</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Candidate B</td>
                            <td>79/100</td>
                            <td>Above-average technical score, 5 years experience</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Candidate A</td>
                            <td>76/100</td>
                            <td>High technical score, but employment gap</td>
                        </tr>
                    </table>
                    <p>This algorithm identifies high performers regardless of pedigree, but may still contain hidden biases in how "skills" are measured.</p>
                `;
                break;
                
            case 'potential':
                content = `
                    <p>The <strong>"Potential-Focused" Algorithm</strong> ranked candidates as follows:</p>
                    <table class="results-table">
                        <tr>
                            <th>Rank</th>
                            <th>Candidate</th>
                            <th>Score</th>
                            <th>Key Factors</th>
                        </tr>
                        <tr class="highlight">
                            <td>1</td>
                            <td>Candidate D</td>
                            <td>95/100</td>
                            <td>Self-taught, rapid skill acquisition</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Candidate C</td>
                            <td>88/100</td>
                            <td>Steady progression despite barriers</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Candidate B</td>
                            <td>72/100</td>
                            <td>Solid but conventional trajectory</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Candidate A</td>
                            <td>65/100</td>
                            <td>Traditional path with less evidence of overcoming obstacles</td>
                        </tr>
                    </table>
                    <p>This algorithm values demonstrated ability to learn and adapt over credentials, creating opportunities for non-traditional candidates.</p>
                `;
                break;
                
            case 'diversity':
                content = `
                    <p>The <strong>"Diversity-Conscious" Algorithm</strong> ranked candidates as follows:</p>
                    <table class="results-table">
                        <tr>
                            <th>Rank</th>
                            <th>Candidate</th>
                            <th>Score</th>
                            <th>Key Factors</th>
                        </tr>
                        <tr class="highlight">
                            <td>1</td>
                            <td>Candidate C</td>
                            <td>90/100</td>
                            <td>Highest technical score, bias mitigated for neighborhood</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Candidate D</td>
                            <td>87/100</td>
                            <td>Strong skills, gap penalty removed</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Candidate A</td>
                            <td>83/100</td>
                            <td>Gap penalty removed (childcare)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Candidate B</td>
                            <td>80/100</td>
                            <td>Solid performance across categories</td>
                        </tr>
                    </table>
                    <p>This algorithm maintains a focus on skills while removing penalties for factors like employment gaps due to caregiving and reducing the influence of historically biased signals like zip code.</p>
                    <p>Notice that while the rankings are similar to the Skills-First algorithm, the scores are much closer together, creating a more equitable selection process.</p>
                `;
                break;
        }
        
        resultsContent.innerHTML = content;
    }
});
