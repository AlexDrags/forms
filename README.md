Initial Profiling with React Dev Tools Profiler:

Durations first render :
- Full app : 127,9 ms;
- List component: 7.2ms;
- ItemList components: first 6( 0,7ms - 1,4ms ), rest ItemList 0,5ms;
<img src="./public/durations.png" width={600}>

Upadate data in list after change year: 35,7 ms;
<img src="./public/update-year.png" width={600}>

Open modal window: 1,6ms;
<img src="./public/open-modal.png" width={600}>

Add methane columns: oil_co2, Temperature change from CO2 (4,6ms + 2,6ms + 3,2ms);
<img src="./public/add-columns.png" width={600}>

Show data after searching:  22,3ms;
<img src="./public/search.png" width={600}>
