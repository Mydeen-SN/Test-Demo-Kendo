export class BasicUse {

  legend = {
    visible: false
  };

  series = [{
    type: 'boxPlot',
    data: [
      [26.2, 38.3, 51, 61.45, 68.9, 49.0, [18.3, 20, 70, 72, 5]],
      [26.4, 38.125, 46.8, 60.425, 66.8, 47.3, [18, 69, 71.3, 71.5]],
      [31.6, 41.725, 52.35, 62.175, 70.8, 52.3, [14, 16.4, 74]],
      [34.4, 39.375, 49.9, 61.425, 69.2, 50.3, [16, 18, 72, 72.5]],
      [29.9, 38.35, 50.4, 60.875, 69.7, 49.9, [19, 20, 76, 78]],
      [22.3, 36.875, 48.9, 62.65, 70.3, 49.0, [16.5, 17, 74, 75, 78]],
      [32.3, 39.5, 54.1, 61.175, 67.3, 50.8, [13, 14, 15, 74.3, 75.2, 76]],
      [28.5, 36.075, 50.5, 64.2, 70.4, 49.6, [18, 22, 73.4, 75]],
      [33.6, 40.65, 49.55, 62.8, 69.2, 51.1, [17, 73]],
      [33.6, 38.6, 47.9, 60.825, 67, 49.7, [12, 13.5, 16, 73, 74.6, 77]],
      [31.9, 36.425, 49.3, 61.825, 69.7, 49.4, [17, 76]],
      [34, 41.225, 51.15, 62.4, 68.8, 51.6, [14.6, 17.3, 72.3, 74]]
    ]
  }];

  categoryAxis = {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    majorGridLines: {
      visible: false
    },
    labels: {
      rotation: 'auto'
    }
  };
}
