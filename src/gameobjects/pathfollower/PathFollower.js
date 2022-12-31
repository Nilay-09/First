/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2022 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../../utils/Class');
var Components = require('../components');
var Sprite = require('../sprite/Sprite');

/**
 * @classdesc
 * A PathFollower Game Object.
 *
 * A PathFollower is a Sprite Game Object with some extra helpers to allow it to follow a Path automatically.
 *
 * Anything you can do with a standard Sprite can be done with this PathFollower, such as animate it, tint it,
 * scale it and so on.
 *
 * PathFollowers are bound to a single Path at any one time and can traverse the length of the Path, from start
 * to finish, forwards or backwards, or from any given point on the Path to its end. They can optionally rotate
 * to face the direction of the path, be offset from the path coordinates or rotate independently of the Path.
 *
 * @class PathFollower
 * @extends Phaser.GameObjects.Sprite
 * @memberof Phaser.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @extends Phaser.GameObjects.Components.PathFollower
 *
 * @param {Phaser.Scene} scene - The Scene to which this PathFollower belongs.
 * @param {Phaser.Curves.Path} path - The Path this PathFollower is following. It can only follow one Path at a time.
 * @param {number} x - The horizontal position of this Game Object in the world.
 * @param {number} y - The vertical position of this Game Object in the world.
 * @param {(string|Phaser.Textures.Texture)} texture - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @param {(string|number)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 */
var PathFollower = new Class({

    Extends: Sprite,

    Mixins: [
        Components.PathFollower
    ],

    initialize:

    function PathFollower (scene, path, x, y, texture, frame)
    {
        Sprite.call(this, scene, x, y, texture, frame);

        this.path = path;
    },

    /**
     * Internal update handler that advances this PathFollower along the path.
     *
     * Called automatically by the Scene step, should not typically be called directly.
     *
     * @method Phaser.GameObjects.PathFollower#preUpdate
     * @protected
     * @since 3.0.0
     *
     * @param {number} time - The current timestamp as generated by the Request Animation Frame or SetTimeout.
     * @param {number} delta - The delta time, in ms, elapsed since the last frame.
     */
    preUpdate: function (time, delta)
    {
        this.anims.update(time, delta);
        this.pathUpdate(time);
    }

});

module.exports = PathFollower;
