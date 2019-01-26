import * as listMenuItems from '../src/listMenuItems';

test('main', async () => {
  //const event = 'event';
  const event = {
    pathParameters: {
      id: "shalala-mountain-view-2",
    }
  };
  const context = 'context';
  const answer = ["Shalala Miso","Niku Moyashi Miso","Vegetable Shio"]
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
    JSON.parse(response.body).forEach((item, index) => {
      expect(item).toEqual(answer[index]);
    });
  };

  await listMenuItems.main(event, context, callback);
});
