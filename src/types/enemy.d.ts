interface EnemyState extends BaseStats {
  stringComplexity: number; // between 1 ~ 10
  sprite: string; // starts with /sprites/<type>/<key>.png
  size: number; // between 2 ~ 6
  spawn: number; // between 4 ~ 10
  /**
   * The less the spawn stats the more health and damage it has. The
   * opposite is also aplied, the more spawn stats the less health it has.
   * Generally enemy that is has small number of spawn is big creatures like
   * ogre, bears, whale, and so on based on the type of the creatures.
   */
}
