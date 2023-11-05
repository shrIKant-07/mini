import React from "react";
import Gif from './forward.gif';
import Gif2 from './backfoot.png';

const Defense = () => {
  return (
    <div className="dark:bg-black bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#286753]">Defensive Shot</h1>
        <p className="py-4 dark:text-gray-300 mb-4 text-center">
          Sometimes playing a defensive shot is a better choice than the attacking one, owing to the merit of the delivery. You can play defensive shots on the front foot or back foot. Let’s look at both kinds of defensive shots in detail.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl dark:text-white font-bold mb-2">1. Forward Defence</h2>
          <p className="py-4 dark:text-gray-300 mb-4">
            The forward defence or the front-foot defence is the best choice when the ball is pitched around the good length and the line of the ball is threatening the stumps. To play this shot, move your front foot towards the pitch of the ball and get your head near your knee before bringing the bat down to connect the ball.
          </p>

          <img
            src={Gif}
            alt="GIF"
            className="w-64 h-64 object-cover rounded-lg mx-auto"
          />
        </div>

        <div>
          <h2 className="text-2xl dark:text-white font-bold mb-2">2. Back Foot Defence</h2>
          <p className="py-4 dark:text-gray-300 mb-4">
            It is also similar to the front foot defense we mentioned above. But here, the batsman transfers his weight onto the back foot, stands tall, and blocks the ball. The back foot defense is mainly used to face good and short-length deliveries on the body line.
          </p>

          <img
            src={Gif2}
            alt="GIF"
            className="w-100 h-50 object-cover rounded-lg mx-auto bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Defense;