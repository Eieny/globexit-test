SET STATISTICS TIME ON;

WITH Lvl AS (SELECT s.id, 1 AS level
			FROM [testdb].[dbo].subdivisions AS s
			WHERE s.parent_id IS NULL

			UNION ALL

			SELECT s.id, l.level + 1 AS level
			FROM Lvl AS l, [testdb].[dbo].subdivisions AS s
			WHERE s.parent_id = l.id),

Subdiv AS (SELECT s.id, s.parent_id 
			FROM [testdb].[dbo].subdivisions AS s
			WHERE s.parent_id = (SELECT c.subdivision_id 
				FROM [testdb].[dbo].collaborators AS c
				WHERE c.id = 710253)
		
			UNION ALL
	
			SELECT s.id, s.parent_id 
			FROM [testdb].[dbo].subdivisions AS s, Subdiv AS sub
			WHERE s.parent_id = sub.id),

CollsCount AS (SELECT collaborators.subdivision_id AS id, 
				COUNT(collaborators.subdivision_id) AS colls_count
			FROM [testdb].[dbo].collaborators
			GROUP BY collaborators.subdivision_id)


SELECT c.id,
		c.name,
		s.name AS sub_name,
		s.id AS sub_id,
		l.level,
		sub_count.colls_count
	FROM [testdb].[dbo].collaborators AS c
	JOIN [testdb].[dbo].subdivisions AS s ON c.subdivision_id = s.id
	JOIN CollsCount AS sub_count ON sub_count.id = c.subdivision_id
	JOIN Lvl AS l ON s.id = l.id
	JOIN Subdiv ON s.id = Subdiv.id
	WHERE c.age < 40 AND LEN(c.name) > 11
		AND s.id NOT IN (100055, 100059)
	ORDER BY l.level

SET STATISTICS TIME OFF;